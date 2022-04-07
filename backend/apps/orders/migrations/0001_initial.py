# Generated by Django 3.2.4 on 2022-04-07 09:32

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=255, verbose_name='Customer Name')),
                ('customer_phone', models.CharField(max_length=255, verbose_name='Customer Phone')),
                ('address', models.CharField(max_length=255, verbose_name='Address')),
                ('pin_code', models.CharField(max_length=255, verbose_name='Pin Code')),
                ('building_type', models.CharField(blank=True, max_length=255, null=True, verbose_name='Building Type')),
                ('city', models.CharField(max_length=255, verbose_name='City')),
                ('state', models.CharField(max_length=255, verbose_name='State')),
                ('total_price', models.FloatField(verbose_name='Total Price')),
                ('total_qty', models.IntegerField(verbose_name='Total Quantity')),
                ('created_at', models.DateTimeField(blank=True, default=django.utils.timezone.now, verbose_name='Creation Date')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_order_user', to='users.user')),
            ],
            options={
                'db_table': 'order',
            },
        ),
    ]
