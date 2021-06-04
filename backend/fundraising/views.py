from rest_framework.views import Response, status
from rest_framework.decorators import api_view

from .serializers import GoalSerializer, LeadSerializer
from .models import Fundraiser


@ api_view(['GET'])
def instrument_drive(_):
    qs = Fundraiser.objects.get(name='Instrument Drive').goals.all()  # type: ignore
    return Response(
        GoalSerializer(qs, many=True).data
    )


@ api_view(['POST'])
def lead_form(request):
    serializer = LeadSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()
        return Response(LeadSerializer(instance).data)
    return Response(serializer.errors)
