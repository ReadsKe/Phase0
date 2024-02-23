from app import app, db, User, Pet, PetStore, Review, MedicalRecord,Appointment,Donation,PetStoreDonation,PetStoreReview
from faker import Faker
import random

fake = Faker()

# Array of genders for pets
genderArray = ["Male", "Female"]

petImages = [
    "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=sph",
    "https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://img.freepik.com/free-photo/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface_181624-35913.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=sph",
    "https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=sph",
    "https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192357.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=sph",
    "https://img.freepik.com/free-photo/portrait-siberian-husky-with-different-colored-eyes-black-background_181624-40661.jpg?size=626&ext=jpg&ga=GA1.1.1629008978.1706000355&semt=sph",
    "https://img.freepik.com/free-photo/e6mmqmducags9ema81vqg4lssvin112lzmqib9g8jpg_181624-57371.jpg?size=626&ext=jpg&ga=GA1.1.1629008978.1706000355&semt=sph",
    "https://img.freepik.com/free-photo/selective-shot-aquarium-yellow-cichlidae-fish_181624-35618.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/halfmoon-betta-fish_1150-7816.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/copperband-butterflyfish-chelmon-rostratus-marine-fish-beautiful-fish-seabed-coral-reefs_488145-1954.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://images.saymedia-content.com/.image/t_share/MTk3MDE2NjYyMzgwMTI4MDA1/the-best-snakes-to-have-as-a-pet.jpg",
    "https://images.pexels.com/photos/459124/pexels-photo-459124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://img.freepik.com/free-photo/liopeltis-snake-closeup-green-leaves-leopeltis-snake-front-view_488145-94.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3715583/pexels-photo-3715583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://img.freepik.com/free-photo/guinea-pig-wooden-table_181624-29207.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/cute-guinea-pig-green-grass-garden_127675-2387.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/closeup-yellow-albino-iguana-closeup-albinoi-iguana-closeup-animal-closeup_488145-3570.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/big-green-iguana-lying-piece-wood_181624-4785.jpg?size=626&ext=jpg&ga=GA1.1.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/domestic-pet-rabbit-green-grass_181624-48945.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais",
    "https://img.freepik.com/free-photo/portrait-cute-fluffy-gray-rabbit-with-ears-natural-green-grass_78492-3948.jpg?size=626&ext=jpg&ga=GA1.2.1629008978.1706000355&semt=ais"
    
]

pet_store_images = [
   "https://media.gettyimages.com/id/157280870/photo/blank-storefront-two-sections.jpg?s=612x612&w=0&k=20&c=nkD41Biw8SzxIO96qAJDKAXbGOCwUCrhBbqwRRcDFXk=" 
   "https://media.gettyimages.com/id/1285754732/photo/pets-corner-on-blighs-walk-in-sevenoaks-england.jpg?s=612x612&w=0&k=20&c=cOonIKg45XVRaXTCq_iozb2R3RwwQCAQ0xzP9fyJx7Q="
   "https://media.gettyimages.com/id/458980593/photo/pets-unlimited.jpg?s=612x612&w=0&k=20&c=xXxqQFObvJMTAzFUdGpbyla9WHOv_Msr7G7l8aTFeVg="
   "https://media.gettyimages.com/id/497517540/photo/central-street-in-bath-maine.jpg?s=612x612&w=0&k=20&c=DTCFbUe_n12zy14DuIeHkgbqCcaZTdyXku73fd8QJ5A="
   "https://media.gettyimages.com/id/516770916/photo/petsmart.jpg?s=612x612&w=0&k=20&c=jbBfFWTJG0xFd1A4kykBsp1PPnmkSW5yCa7V0UK0CMw="
   "https://media.gettyimages.com/id/1225501360/photo/pets-at-home-in-sevenoaks-england.jpg?s=612x612&w=0&k=20&c=kfNInhVp-pNsWjDqGa9zKkxtaOJqmj46nXOSnYtex2k="
   "https://media.gettyimages.com/id/482429306/photo/ornamental-fish-pet-shop-in-berlin.jpg?s=612x612&w=0&k=20&c=rkssSoUAd82Cw5rX9N40YKklqAKD3R4oiYxsEidU6ic="
   "https://media.gettyimages.com/id/961494856/photo/pet-smart-in-east-liberty.jpg?s=612x612&w=0&k=20&c=efjdPeslxBIsD1tGSyiV5LP84fCsilO6l4RykE9BRFE="
   "https://media.gettyimages.com/id/951056170/photo/pets-at-home-superstore.jpg?s=612x612&w=0&k=20&c=jRxW2TvSer-gjtRwYpnXgs_eIm1SrAFIKG5SnqJGq9s="
   "https://media.gettyimages.com/id/532681817/photo/petco.jpg?s=612x612&w=0&k=20&c=4xcb3C5LltlObpMwrxOa8CqNOxS7TBieDX_HbByshDI="
   "https://media.gettyimages.com/id/1953412846/photo/southend-england-a-general-exterior-view-of-a-pets-at-home-pet-shop-and-vet-surgery-retail.jpg?s=612x612&w=0&k=20&c=EvKfSpx2KcW1XIJFaSYuSwoK1cKweS8VyrU4aam6I0Y="
   "https://media.gettyimages.com/id/150365502/photo/exterior-of-star-pets-only-pet-store-yaletown.jpg?s=612x612&w=0&k=20&c=PMC_1nJxAFl3g8VIbVqOBmhBQc-tlnyXAN0y8W3Y3qA="
   "https://media.gettyimages.com/id/1285754739/photo/pets-corner-on-blighs-walk-in-sevenoaks-england.jpg?s=612x612&w=0&k=20&c=rjYhsvSgP7RmBpt0t-pxggAjub5AIHo7RN2ym0mFpEw="
   "https://media.gettyimages.com/id/1285741551/photo/pet-pavilion-in-kensington-church-street-london.jpg?s=612x612&w=0&k=20&c=f9TRxZAayXtMzUa0guBr0mkzJeO6Ws45tEG9vh3U8ng="
   "https://media.gettyimages.com/id/1220208234/photo/a-vendor-stands-outside-their-pet-store-at-shepherds-bush-market-in-west-london-on-june-15.jpg?s=612x612&w=0&k=20&c=IvQd6UbPRnMkoR0Ul2o4K0IuUsX6qXMQMyAMaklYxsk="
]

# Array of comments related to reviewing a pet store
review_comments = [
    "Great selection of pets!",
    "Friendly staff and clean environment.",
    "The prices are reasonable.",
    "I love the variety of species they have.",
    "The store is well-maintained and organized.",
    "Excellent customer service.",
    "The pet store is my go-to place for all pet supplies.",
    "I highly recommend this pet store.",
    "They have unique and rare species.",
    "Knowledgeable staff members.",
    "The pet store has a welcoming atmosphere.",
    "My pets always enjoy their purchases from here.",
    "The staff goes above and beyond to assist customers.",
    "The pet store supports local animal shelters.",
    "Fair and transparent pricing.",
    "A great place for pet enthusiasts!",
    "Clean and spacious store layout.",
    "I found everything I needed for my furry friends.",
    "The pet store hosts informative events for pet owners.",
    "The pet store contributes to community events.",
]

#  Array of health status related to medical records 
healthStatus = ["Very Healthy", "Healthy", "Very Sick", "Sick"]


# Arrays for details and purpose
details_array = [
    "Vaccination checkup",
    "Grooming session",
    "Behavioral consultation",
    "Adoption consultation",
    "Pet health check",
    "Training session",
    "Microchip implantation",
    "Dental checkup",
    "Pet supplies shopping",
    "New pet introduction",
]

purpose_array = [
    "Regular checkup",
    "Training",
    "Adoption inquiry",
    "Medical consultation",
    "Grooming",
    "Shopping",
    "Behavioral assessment",
    "Dental care",
    "Pet socialization",
    "Microchipping",
]


def seed_data():
    with app.app_context():
        
        print('<<<<<<=Deleting existing seed data=>>>>>>')
        User.query.delete()
        Pet.query.delete()
        PetStore.query.delete()
        Review.query.delete()
        MedicalRecord.query.delete()
        Appointment.query.delete()
        Donation.query.delete()
        PetStoreDonation.query.delete()
        PetStoreReview.query.delete()
        
        db.create_all()
        
        print('<<<<<<=Seeding new data to the tables=>>>>>>')
        
        # Users data
        users = []
        for _ in range(10):
            user = User(username=fake.name(),
                        email=fake.email(),
                        phone_number=fake.random_int(min=10000, max=99999),
                        password=fake.password(),
                        profile_image_url=fake.image_url(),
                        )
            users.append(user)
            db.session.add(user)
        db.session.commit()
        
        # Pet Stores data
        pet_stores = []
        for _ in range(10):
            pet_store = PetStore(name=fake.company(),
                                 location=fake.address(),
                                 phone_number=fake.random_int(min=10000, max=99999),
                                 email=fake.company_email(),
                                 petstore_url=random.choice(pet_store_images),
                                 )
            pet_stores.append(pet_store)
            db.session.add(pet_store)
        db.session.commit()
        
        # Pets data
        pets = []
        for _ in range(20):
            pet_store = random.choice(pet_stores)
            
            pet = Pet(name=fake.first_name(),
                      gender=random.choice(genderArray),
                      price=random.randint(10, 100),
                      age=random.randint(1, 10),
                      pet_store=pet_store,
                      image_url=random.choice(petImages),
                      )
            pets.append(pet)
            db.session.add(pet)
        db.session.commit()
        
        # Reviews data
        reviews = []
        for _ in range(15):
            user = random.choice(users)
            
            review = Review(rating=fake.random_int(min=1, max=5),
                            comments=random.choice(review_comments),
                            user=user,
                            )
            reviews.append(review)
            db.session.add(review)
        db.session.commit()
        
        # Medical Records data
        medical_records = []
        for _ in range(10):
            pet = random.choice(pets)
            
            
            medical_record = MedicalRecord(health_status=random.choice(healthStatus),
                                           description=fake.text(),
                                           pet=pet,
                            )
            medical_records.append(medical_record)
            db.session.add(medical_record)
        db.session.commit()
        
         # Seed data for appointments
        
        appointments = []
        for _ in range(15):  
            user = random.choice(users)
            pet_store = random.choice(pet_stores)

            appointment = Appointment(
                user=user,
                pet_store=pet_store,
                details=random.choice(details_array),
                purpose=random.choice(purpose_array),
            )
            appointments.append(appointment)
            db.session.add(appointment)

        db.session.commit()
        
        # Seed data for donations
        
        donations = []
        for _ in range(20):  
            user = random.choice(users)

            donation = Donation(
                user=user,
                amount=random.randint(10, 1000),
            )
            donations.append(donation)
            db.session.add(donation)

        db.session.commit()
        
        
        # Seed data for pet store donations
        
        for _ in range(35):  
            pet_store = random.choice(pet_stores)
            donation = random.choice(donations)

            pet_store_donation = PetStoreDonation(
                pet_store=pet_store,
                donations=donation,
            )

            db.session.add(pet_store_donation)

        db.session.commit()
        
        
        # Seed data for pet store reviews
        
        for _ in range(20): 
            pet_store = random.choice(pet_stores)
            review = random.choice(reviews)

            pet_store_review = PetStoreReview(
                pet_store=pet_store,
                reviews=review,
            )

            db.session.add(pet_store_review)

        db.session.commit()
        
        
        print('<<<<<<= Completed seeding! =>>>>>>')

if __name__ == '__main__':
    seed_data()