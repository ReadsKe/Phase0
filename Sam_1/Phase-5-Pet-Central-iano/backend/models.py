from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from datetime import datetime


db = SQLAlchemy()

class User(db.Model):
    
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), )
    email = db.Column(db.String,)
    phone_number = db.Column(db.Integer, )
    profile_image_url = db.Column(db.String, )  # Image URL
    password = db.Column(db.String(450), unique=False, )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    
    # Relationships
    appointment = db.relationship('Appointment', back_populates='user', lazy=True, cascade='all, delete-orphan')
    reviews = db.relationship('Review', back_populates='user', lazy=True, cascade='all, delete-orphan')
    adoptions = db.relationship('Adoption', back_populates='user', lazy=True, cascade='all, delete-orphan')
    donations = db.relationship('Donation', back_populates='user', lazy=True, cascade='all, delete-orphan')
    
    #validate the users email to have an @
    @validates('email')
    def validate_email(self, key, email):
        if '@' not in email:
            raise ValueError("Invalid email address. Must contain '@'.")
        return email
    

    #   For Logout JWT Block List
class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti =  db.Column(db.String(100),nullable=True)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)

 
class Pet(db.Model):
    
    __tablename__ = 'pets'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), )
    gender = db.Column(db.String, )
    price = db.Column(db.Integer, )
    age = db.Column(db.Integer, )
    image_url = db.Column(db.String, )  # Image URL column
    pet_store_id = db.Column(db.Integer, db.ForeignKey('pet_stores.id'), )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    # Relationships
    
    pet_store = db.relationship('PetStore', back_populates='pets', lazy=True,)
    medical_records = db.relationship('MedicalRecord', back_populates='pet', lazy=True, )
    adoptions = db.relationship('Adoption', back_populates='pet', lazy=True, cascade='all, delete-orphan')

class Review(db.Model):
    
    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, )
    comments = db.Column(db.String, )
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    # Relationships
    
    user = db.relationship('User', back_populates='reviews', lazy=True)
    petstore_review = db.relationship('PetStoreReview', back_populates='reviews', lazy=True)

class PetStore(db.Model):
    
    __tablename__ = 'pet_stores'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, )
    location = db.Column(db.String, )
    phone_number = db.Column(db.Integer, )
    email = db.Column(db.String, )
    petstore_url = db.Column(db.String, )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    
    
    # Relationships
    appointments = db.relationship('Appointment', back_populates='pet_store', lazy=True, cascade='all, delete-orphan')
    pets = db.relationship('Pet', back_populates='pet_store', lazy=True, cascade='all, delete-orphan')
    petstore_donations = db.relationship('PetStoreDonation', back_populates='pet_store', lazy=True, cascade='all, delete-orphan')
    petstore_reviews = db.relationship('PetStoreReview', back_populates='pet_store', lazy=True, cascade='all, delete-orphan')
    
    
class Adoption(db.Model):
    
    __tablename__ = 'adoptions'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'), )
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #relationships
    pet = db.relationship('Pet', back_populates='adoptions', lazy=True,)
    user = db.relationship('User', back_populates='adoptions', lazy=True,)
    

class PetStoreReview(db.Model):
    
    __tablename__ = 'pet_store_reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_store_id = db.Column(db.Integer, db.ForeignKey('pet_stores.id'), )
    review_id = db.Column(db.Integer, db.ForeignKey('reviews.id'), )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #relationships
    pet_store = db.relationship('PetStore', back_populates='petstore_reviews', lazy=True,)
    reviews = db.relationship('Review', back_populates='petstore_review', lazy=True,)
    
class MedicalRecord(db.Model):
    
    __tablename__ = 'medical_records'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'), )
    health_status = db.Column(db.String, )
    description = db.Column(db.String, )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #relationships
    pet = db.relationship('Pet', back_populates='medical_records', lazy=True,)
    
    
class PetStoreDonation(db.Model):
    
    __tablename__ = 'pet_store_donations'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_store_id = db.Column(db.Integer, db.ForeignKey('pet_stores.id'), )
    donations_id = db.Column(db.Integer, db.ForeignKey('donations.id'), )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #relationships
    donations = db.relationship('Donation', back_populates='pet_store_donations', lazy=True,)
    pet_store = db.relationship('PetStore', back_populates='petstore_donations', lazy=True,)
    

class Donation(db.Model):
    
    __tablename__ = 'donations'
    
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, )
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #relationships
    user = db.relationship('User', back_populates='donations', lazy=True,)
    pet_store_donations = db.relationship('PetStoreDonation', back_populates='donations', lazy=True,)
    
    
class Appointment(db.Model):
    
    __tablename__ = 'appointments'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), )
    pet_store_id = db.Column(db.Integer, db.ForeignKey('pet_stores.id'), )
    details = db.Column(db.String, )
    purpose = db.Column(db.String, )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    #relationships
    user = db.relationship('User', back_populates='appointment', lazy=True,)
    pet_store = db.relationship('PetStore', back_populates='appointments', lazy=True,)