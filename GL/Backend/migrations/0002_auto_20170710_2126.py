# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-07-10 21:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArtistOverview',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ArtistBio', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Music',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('MusicList', models.FileField(upload_to='MusicList')),
            ],
        ),
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(upload_to='VideoList')),
            ],
        ),
        migrations.AlterField(
            model_name='logo',
            name='image',
            field=models.ImageField(upload_to='Logos'),
        ),
    ]