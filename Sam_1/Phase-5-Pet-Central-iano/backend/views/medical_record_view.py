from models import db,MedicalRecord
from flask import Blueprint, jsonify, request,make_response

medical_record_bp = Blueprint('medical_record_bp', __name__)


#fetch medical records for a single pet
@medical_record_bp.route('/medicalrecords/<int:medical_record_id>', methods=['GET'])
def get_medical_record_by_id(medical_record_id):
    medicalrecord = MedicalRecord.query.get_or_404(medical_record_id)
    medicalrecord_data = {
        'id': medicalrecord.id,
        'health_status': medicalrecord.health_status,
        'description' : medicalrecord.description,
        'pet' : {
            'id':medicalrecord.pet.id,
            'name':medicalrecord.pet.name,
            'gender':medicalrecord.pet.gender,
            'age':medicalrecord.pet.age,
            'image_url':medicalrecord.pet.image_url,
            
        }
    }
    response = make_response(
        jsonify(medicalrecord_data), 200
    )
    return response