from rest_framework.views import Response
from rest_framework.decorators import api_view

from .serializers import GoalSerializer
from .models import Fundraiser


@ api_view(['GET'])
def instrument_drive(_):
    qs = Fundraiser.objects.get(name='Instrument Drive').goals.all()  # type: ignore
    return Response(
        GoalSerializer(qs, many=True).data
    )
