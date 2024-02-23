from models import db,Adoption
from flask import Blueprint, jsonify, request,make_response
from flask_jwt_extended import  jwt_required, get_jwt_identity

adoption_bp = Blueprint('adoption_bp', __name__)


# Create a new adoption for a pet 
@adoption_bp.route('/adoptions', methods=['POST'])
@jwt_required()
def create_adoption():
    data = request.get_json()
    current_user_id = get_jwt_identity()
    
    new_adoption = Adoption(
        
        pet_id = data.get('pet_id'),
        user_id = current_user_id,
        
    )
    
     

    db.session.add(new_adoption)
    db.session.commit()
    
    # Fetch the created adoption with user and pet information
    created_adoption = Adoption.query.filter_by(id=new_adoption.id).first()

    if created_adoption:
        response_data = {
            'id': created_adoption.id,
            'user': {
                'id': created_adoption.user.id,
                'username': created_adoption.user.username,
                'email': created_adoption.user.email,
                'phone_number': created_adoption.user.phone_number,
            } if created_adoption.user else None,
            'pet' : {
                'id':created_adoption.pet.id,
                'name' : created_adoption.pet.name,
                'gender' : created_adoption.pet.gender,
                'price' : created_adoption.pet.price,
                'age' : created_adoption.pet.age,
                'image_url' : created_adoption.pet.image_url,
                
            }if created_adoption.pet else None,
        }

        return jsonify({'message': 'Adoption created successfully', 'adoption': response_data}), 201
    else:
        return jsonify({'error': 'Failed to fetch the created adoption'}), 500

