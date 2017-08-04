from tastypie.resources import ModelResource
from tastypie.constants import ALL

from Backend.models import ArtistOverview

class BackendResource(ModelResource):
    class Meta:
        queryset =  ArtistOverview.objects.all()
        resource_name = 'Backend'
        #filtering = {'title': ALL}

