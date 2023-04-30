from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated



# Create your views here.

def index(request):
    pass


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    pass


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    pass


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    pass