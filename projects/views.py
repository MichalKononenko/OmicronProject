from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from projects.models import Projects
from projects.serializers import ProjectsSerializer
from projects.permissions import IsOwnerOrReadOnly


# Create your views here.
class ProjectsViewSet(viewsets.ModelViewSet):

    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = (IsAuthenticated,)
