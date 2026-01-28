from django.test import SimpleTestCase
from django.urls import reverse, resolve
from api.views import get_confirms, confirm_detail

class TestUrls(SimpleTestCase):
    
        
    def test_get_confirms(self):
        url = reverse('get_confirms')
        self.assertEqual(resolve(url).func, get_confirms)

    def test_confirm_detail(self):
        url = reverse('confirm_detail', args=[1])
        self.assertEqual(resolve(url).func, confirm_detail)