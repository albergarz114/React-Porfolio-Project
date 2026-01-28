# Instructions: Chakra UI - React

# This project is Professional Porfolio of me which is a full-stack application. I implemented React.js along with Chakra UI Library, Django REST Framework, sql lite3, Docker, Unit tests, UI Tests, and CD/CI pipeline. On the client side, I added language toggle icon for three languages which are English, German, and Spanish. 

# Notes -Important!!! -> the Dockerfile has to be inside of myapp along with requirement.txt. Also, docker-compose.yml need to be in the root file. 

## Installment 
1. pip install django djangorestframework django-cors-headers
2. npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
3. http://127.0.0.1:8000/api/confirms/ (server side)

## UNIT Tests (backend)
1. docker-compose exec backend python manage.py test api 

# DOCKER 
1. docker-compose up --build 
2. http://127.0.0.1:8000/api/confirms/
3. docker-compose exec backend python manage.py migrate