from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status
from .models import Confirm
from .serializers import ConfirmSerializer
# Create your views here.


@api_view(['POST'])
def create_confirm(request):
    if request.method == 'POST':
        serializer = ConfirmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def get_confirms(request):
    if request.method == 'GET':
        confirms = Confirm.objects.all()
        serializedData = ConfirmSerializer(confirms, many=True).data
        return Response(serializedData)
    elif request.method == 'POST':
        serializer = ConfirmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'DELETE', 'PUT'])
def confirm_detail(request, pk):
    try:
        confirm = Confirm.objects.get(pk=pk)
    except Confirm.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ConfirmSerializer(confirm)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        confirm.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        serializer = ConfirmSerializer(confirm, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)