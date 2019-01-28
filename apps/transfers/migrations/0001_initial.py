# Generated by Django 2.1.5 on 2019-01-28 20:49

from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sports', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('amount', models.PositiveIntegerField(blank=True, null=True)),
                ('status', models.CharField(max_length=50)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Payment',
                'verbose_name_plural': 'Payments',
            },
        ),
        migrations.CreateModel(
            name='Transfer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('location_from', django_countries.fields.CountryField(max_length=2)),
                ('location_to', django_countries.fields.CountryField(max_length=2)),
                ('agent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sports.Agent')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sports.Player')),
                ('transferTo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sports.Team')),
            ],
            options={
                'verbose_name': 'Transfer',
                'verbose_name_plural': 'Transfers',
            },
        ),
        migrations.AddField(
            model_name='payment',
            name='transfer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transfers.Transfer'),
        ),
    ]
