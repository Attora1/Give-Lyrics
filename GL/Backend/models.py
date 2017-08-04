from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Logo(models.Model):
    image = models.ImageField(upload_to='Logos')
    
class Music(models.Model):
    MusicList = models.FileField(upload_to='MusicList')

class ArtistOverview(models.Model):
    Name = models.CharField(max_length=25)
    Bio = models.TextField()
    

class Video(models.Model):
    video = models.FileField(upload_to='VideoList')
