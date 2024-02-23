from models import db,PetStore
from flask import Blueprint, jsonify, request,make_response


pet_store_bp = Blueprint('pet_store_bp', __name__)

# Fetch all pet stores
@pet_store_bp.route('/petstores', methods=['GET'])
def get_all_pet_stores():
    pet_stores = PetStore.query.all()
    petstore_list = []

    for petstore in pet_stores:
        petstore_data = {
            'id': petstore.id,
            'name': petstore.name,
            'location': petstore.location,
            'phone_number': petstore.phone_number,
            'email': petstore.email,
            'petstore_url': petstore.petstore_url,
            'pets': [
                {
                    'id': pet.id,
                    'name': pet.name,
                    'gender': pet.gender,
                    'price': pet.price,
                    'age': pet.age,
                    'image_url': pet.image_url,
                }
                for pet in petstore.pets
            ],
            'petstore_reviews': [
                {
                    'pet_store_id': petstore_review.pet_store_id,
                    'review_id': petstore_review.review_id,
                    'review': {
                        'rating': petstore_review.reviews.rating if petstore_review.reviews else None,
                        'comments': petstore_review.reviews.comments if petstore_review.reviews else None,
                        'user': {
                            'id': petstore_review.reviews.user.id if petstore_review.reviews and petstore_review.reviews.user else None,
                            'username': petstore_review.reviews.user.username if petstore_review.reviews and petstore_review.reviews.user else None,
                            'email': petstore_review.reviews.user.email if petstore_review.reviews and petstore_review.reviews.user else None,
                        } if petstore_review.reviews else None
                    } if petstore_review.reviews else None
                }
                for petstore_review in petstore.petstore_reviews
            ]
        }
        petstore_list.append(petstore_data)

    response = make_response(jsonify(petstore_list), 200)
    return response


# Fetch a pet store by ID with its pets and reviews
@pet_store_bp.route('/petstores/<int:petstore_id>', methods=['GET'])
def get_pet_store_by_id(petstore_id):
    petstore = PetStore.query.get_or_404(petstore_id)
    petstore_data = {
        'id': petstore.id,
        'name': petstore.name,
        'location': petstore.location,
        'phone_number': petstore.phone_number,
        'email': petstore.email,
        'petstore_url': petstore.petstore_url,
        'pets': [
            {
                'id': pet.id,
                'name': pet.name,
                'gender': pet.gender,
                'price': pet.price,
                'age': pet.age,
                'image_url': pet.image_url
            }
            for pet in petstore.pets
        ],
        'petstore_reviews': [
            {
                'pet_store_id': petstore_review.pet_store_id,
                'review_id': petstore_review.review_id,
                'review': {
                    'rating': petstore_review.reviews.rating if petstore_review.reviews else None,
                    'comments': petstore_review.reviews.comments if petstore_review.reviews else None,
                    'user': {
                        'id': petstore_review.reviews.user.id if petstore_review.reviews and petstore_review.reviews.user else None,
                        'username': petstore_review.reviews.user.username if petstore_review.reviews and petstore_review.reviews.user else None,
                        'email': petstore_review.reviews.user.email if petstore_review.reviews and petstore_review.reviews.user else None,
                    } if petstore_review.reviews and petstore_review.reviews.user else None
                } if petstore_review.reviews else None
            }
            for petstore_review in petstore.petstore_reviews if petstore_review.reviews is not None
        ]
    }
    response = make_response(
        jsonify(petstore_data), 200
    )
    return response