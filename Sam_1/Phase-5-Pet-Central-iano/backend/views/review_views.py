from models import db,Review,User,PetStoreReview,PetStore
from flask import Blueprint, jsonify, request,make_response
from flask_jwt_extended import  jwt_required, get_jwt_identity



review_bp = Blueprint('review_bp', __name__)

#fetch all reviews 
@review_bp.route('/reviews', methods=['GET'])

def get_all_reviews():
    reviews = Review.query.all()
    reviews_data = [
        {
            'id': review.id,
            'rating': review.rating,
            'comments': review.comments,
            'pet_store_id': review.petstore_review[0].pet_store_id if review.petstore_review else None,
            'user': {
                'id': review.user.id,
                'username': review.user.username,
                'email': review.user.email,
                'phone_number': review.user.phone_number,
            }
        }
        for review in reviews
    ]
    response = make_response(
        jsonify(reviews_data), 200
    )
    return response

# Create a new review for a pet store
@review_bp.route('/reviews', methods=['POST'])
@jwt_required()
def create_review():
    data = request.get_json()
    current_user_id = get_jwt_identity()
    
    
    new_review = Review(
        rating = data.get('rating'),
        comments = data.get('comments'),
        user_id = current_user_id,
        
    )
    
     # Find the associated pet store and create the relationship
    pet_store_id = data.get('pet_store_id')
    pet_store_review = PetStoreReview(pet_store_id=pet_store_id, reviews=new_review)

    db.session.add_all([new_review, pet_store_review])
    db.session.commit()
    
    # Fetch the created review with user information
    created_review = Review.query.filter_by(id=new_review.id).first()

    if created_review:
        response_data = {
            'id': created_review.id,
            'rating': created_review.rating,
            'comments': created_review.comments,
            'pet_store_id': pet_store_id,  # Use the provided pet_store_id
            'user': {
                'id': created_review.user.id,
                'username': created_review.user.username,
                'email': created_review.user.email,
                'phone_number': created_review.user.phone_number,
            } if created_review.user else None
        }

        return jsonify({'message': 'Review created successfully', 'review': response_data}), 201
    else:
        return jsonify({'error': 'Failed to fetch the created review'}), 500


# Update a review for a pet store
@review_bp.route('/reviews/<int:review_id>', methods=['PUT'])
@jwt_required()
def update_review(review_id):
    data = request.get_json()
    

    # Ensure required fields are present in the request
    if 'rating' not in data or 'comments' not in data:
        return make_response(jsonify({'error': 'Missing required fields in the request'}), 400)

    rating = data.get('rating')
    comments = data.get('comments')

    # Check if the review exists
    existing_review = Review.query.get(review_id)

    if not existing_review:
        return make_response(jsonify({'error': 'Review not found'}), 404)

    else:
        #check if the user is logged in to update the review
        if existing_review.user_id == get_jwt_identity():
            # Update the review
            existing_review.rating = rating
            existing_review.comments = comments
            db.session.commit()

            # Fetch associated data for the response
            pet_store_review = PetStoreReview.query.filter_by(review_id=review_id).first()
            pet_store = PetStore.query.get(pet_store_review.pet_store_id)
            user = User.query.get(existing_review.user_id)
        
        
            response_data = {
                'id': existing_review.id,
                'rating': existing_review.rating,
                'comments': existing_review.comments,
                'petstore_name': pet_store.name if pet_store else None,
                'username': user.username if user else None
            }

            return make_response(jsonify(response_data), 200)
        
        else:
            return jsonify({"error": "You are trying to update someone's review!"}), 404 
        
    

# Delete a review for a pet store
@review_bp.route('/reviews/<int:review_id>', methods=['DELETE'])
@jwt_required()
def delete_review(review_id):
    # Check if the review exists
    existing_review = Review.query.get(review_id)

    if not existing_review:
        return make_response(jsonify({'error': 'Review not found'}), 404)

    else:
         #check if the user is logged in to delete the review
        if existing_review.user_id == get_jwt_identity():
            # Delete the review
            db.session.delete(existing_review)
            db.session.commit()

            return (jsonify({'success': 'Review deleted successfully'}), 200)
    
        else:
            return jsonify({"error": "You are trying to delete someone's review!"}), 404