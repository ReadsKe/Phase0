from models import db,Appointment
from flask import Blueprint, jsonify, request,make_response
from flask_jwt_extended import  jwt_required, get_jwt_identity
from datetime import datetime

appointment_bp = Blueprint('appointment_bp', __name__)

# Create an appointment
@appointment_bp.route('/appointments', methods=['POST'])
@jwt_required()
def create_appointment():
    current_user_id = get_jwt_identity()

    data = request.get_json()
    
    details = data.get('details')
    purpose = data.get('purpose')
    pet_store_id = data.get('pet_store_id')
    

    if not details or not purpose or not pet_store_id:
        return make_response(jsonify(message="Details, purpose, and pet_store_id are required."), 400)

    try:
        new_appointment = Appointment(
            user_id=current_user_id,
            details=details,
            purpose=purpose,
            pet_store_id=pet_store_id,
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )

        db.session.add(new_appointment)
        db.session.commit()

        return make_response(jsonify(message="Appointment created successfully."), 201)

    except Exception as e:
        return make_response(jsonify(message="Error creating appointment.", error=str(e)), 500)

# Get all appointments for the current user
@appointment_bp.route('/appointments', methods=['GET'])
@jwt_required()
def get_user_appointments():
    current_user_id = get_jwt_identity()

    appointments = Appointment.query.filter_by(user_id=current_user_id).all()
    appointment_list = []

    for appointment in appointments:
        appointment_data = {
            'id': appointment.id,
            'details': appointment.details,
            'purpose': appointment.purpose,
            'pet_store_id': appointment.pet_store_id,
            'created_at': appointment.created_at,
            'updated_at': appointment.updated_at,
        }
        appointment_list.append(appointment_data)

    return make_response(jsonify(appointment_list), 200)

# Update an appointment
@appointment_bp.route('/appointments/<int:appointment_id>', methods=['PUT'])
@jwt_required()
def update_appointment(appointment_id):
    current_user_id = get_jwt_identity()

    appointment = Appointment.query.get(appointment_id)

    if not appointment:
        return make_response(jsonify(message="Appointment not found."), 404)

    if appointment.user_id != current_user_id:
        return make_response(jsonify(message="You don't have permission to update this appointment."), 403)

    data = request.get_json()
    details = data.get('details')
    purpose = data.get('purpose')
    pet_store_id = data.get('pet_store_id')

    if details:
        appointment.details = details
    if purpose:
        appointment.purpose = purpose
    if pet_store_id:
        appointment.pet_store_id = pet_store_id

    appointment.updated_at = datetime.utcnow()

    try:
        db.session.commit()
        return make_response(jsonify(message="Appointment updated successfully."), 200)

    except Exception as e:
        return make_response(jsonify(message="Error updating appointment.", error=str(e)), 500)

# Delete an appointment
@appointment_bp.route('/appointments/<int:appointment_id>', methods=['DELETE'])
@jwt_required()
def delete_appointment(appointment_id):
    current_user_id = get_jwt_identity()

    appointment = Appointment.query.get(appointment_id)

    if not appointment:
        return make_response(jsonify(message="Appointment not found."), 404)

    if appointment.user_id != current_user_id:
        return make_response(jsonify(message="You don't have permission to delete this appointment."), 403)

    try:
        db.session.delete(appointment)
        db.session.commit()

        return make_response(jsonify(message="Appointment deleted successfully."), 200)

    except Exception as e:
        return make_response(jsonify(message="Error deleting appointment.", error=str(e)), 500)

