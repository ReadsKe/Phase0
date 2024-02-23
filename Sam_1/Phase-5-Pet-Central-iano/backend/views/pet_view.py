from flask import Blueprint, jsonify
from models import Pet

pet_bp = Blueprint("pet_bp", __name__)

# Fetch all Pets
@pet_bp.route('/pets', methods=['GET'])
def get_all_Pets():
    pets_list = []
    pets = Pet.query.all()

    for pet in pets:
        pet_data = {
            'id': pet.id,
            'image_url':pet.image_url,
            'name': pet.name,
            'age': pet.age,
            'gender': pet.gender,
            'price': pet.price,
        }
        pets_list.append(pet_data)
    return jsonify(pets_list), 200


# fetch a single pet
@pet_bp.route('/pets/<int:id>', methods=['GET'])
def get_pet_by_id(id):
    pet = Pet.query.get(id)

    if pet is None:
        return jsonify({'error': 'Pet not found'}), 404

    pet_data = {
        'id': pet.id,
        'image_url': pet.image_url,
        'name': pet.name,
        'gender': pet.gender,
        'price': pet.price,
        'age': pet.age,
        'medical_records': [],
    }

    # Iterate over the collection of medical records
    for medical_record in pet.medical_records:
        record_data = {
            'id': medical_record.id,
            'health_status': medical_record.health_status,
            'description': medical_record.description,
        }
        pet_data['medical_records'].append(record_data)

    return jsonify(pet_data), 200
