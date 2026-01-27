from django.urls import path
from .views import get_confirms, create_confirm, confirm_detail
urlpatterns = [
    path('confirms/', get_confirms, name="get_confirms"),
    path('confirms/', create_confirm, name="create_confirm"),
    path('confirms/<int:pk>/', confirm_detail, name="confirm_detail"),
]