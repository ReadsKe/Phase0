from models import db,Donation,User,PetStoreDonation,PetStore
from flask import Blueprint, jsonify, request,make_response
from flask_jwt_extended import  jwt_required, get_jwt_identity





donation_bp = Blueprint('donation_bp', __name__)

#fetch all donations 
@donation_bp.route('/donations', methods=['GET'])

def get_all_donations():
    donations = Donation.query.all()
    donations_data = [
        {
            'id': donation.id,
            'amount': donation.amount,
            'pet_store_id': donation.petstore_donation[0].pet_store_id if donation.petstore_donation else None,
            'user': {
                'id': donation.user.id,
                'username': donation.user.username,
                'email': donation.user.email,
                'phone_number': donation.user.phone_number,
            }
        }
        for donation in donations
    ]
    response = make_response(
        jsonify(donations_data), 200
    )
    return response

# Create a new donation for a pet store
@donation_bp.route('/donations', methods=['POST'])
@jwt_required()

def create_donation():
    data = request.form
    current_user_id = get_jwt_identity()
    new_donation = Donation(
        amount = data.get('amount'),
        user_id = current_user_id,
        
    )
    
     # Find the associated pet store and create the relationship
    pet_store_id = data.get('pet_store_id')
    pet_store_donation = PetStoreDonation(pet_store_id=pet_store_id, donations=new_donation)

    db.session.add_all([new_donation, pet_store_donation])
    db.session.commit()
    
    # Fetch the created donation with user information
    created_donation = Donation.query.filter_by(id=new_donation.id).first()

    if created_donation:
        response_data = {
            'id': created_donation.id,
            'amount': created_donation.amount,
            'pet_store_id': pet_store_id,  # Use the provided pet_store_id
            'user': {
                'id': created_donation.user.id,
                'username': created_donation.user.username,
                'email': created_donation.user.email,
                'phone_number': created_donation.user.phone_number,
            } if created_donation.user else None
        }

        return jsonify({'message': 'Donation created successfully', 'donation': response_data}), 201
    else:
        return jsonify({'error': 'Failed to fetch the created donation'}), 500


# Update a donation for a pet store
@donation_bp.route('/donations/<int:donations_id>', methods=['PUT'])
@jwt_required()

def update_donation(donations_id):
    #data = request.get_json()
    data = request.form

    # Ensure required fields are present in the request
    if 'amount' not in data:
        return make_response(jsonify({'error': 'Missing required field in the request'}), 400)

    amount = data.get('amount')
    

    # Check if the donation exists
    existing_donation = Donation.query.get(donations_id)

    if not existing_donation:
        return make_response(jsonify({'error': 'Donation not found'}), 404)

    else:
        #check if the user is logged in to update the donation
        if existing_donation.user_id == get_jwt_identity():
        
         # Update the donation
          existing_donation.amount = amount
          db.session.commit()

         # Fetch associated data for the response
          pet_store_donation = PetStoreDonation.query.filter_by(donations_id=donations_id).first()
          pet_store = PetStore.query.get(pet_store_donation.pet_store_id)
          user = User.query.get(existing_donation.user_id)
        
         
          response_data = {
            'id': existing_donation.id,
            'amount': existing_donation.amount,
            'petstore_name': pet_store.name if pet_store else None,
            'username': user.username if user else None
          }

          return make_response(jsonify(response_data), 200)
    
        else:
            return jsonify({"error": "You are trying to update someone's donation!"}), 404
        
    
        
    

# Delete a donation for a pet store
@donation_bp.route('/donations/<int:donation_id>', methods=['DELETE'])
@jwt_required()

def delete_donation(donation_id):
    # Check if the donation exists
    existing_donation = Donation.query.get(donation_id)

    if not existing_donation:
        return make_response(jsonify({'error': 'Donation not found'}), 404)

    else:
         #check if the user is logged in to delete the donation
     if existing_donation.user_id == get_jwt_identity():
               
        # Delete the donation
        db.session.delete(existing_donation)
        db.session.commit()

        return (jsonify({'success': 'Donation deleted successfully'}), 200)
     else:
            return jsonify({"error": "You are trying to delete someone's donation!"}), 404
        
    
    