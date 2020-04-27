from .serializers import UserSerializer

def custom_jwt_handler(token, user=None, request=None):
    serializer = UserSerializer(user, context={'request': request})
    return {
        'token': token,
        'user': serializer.data
    }
