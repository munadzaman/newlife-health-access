import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, User, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    service: '',
    doctor: '',
    date: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const clinics = [
    { value: 'bishwanath', label: 'Newlife Eye Hospital, Sylhet' }
  ];

  const services = [
    { value: 'eye-consultation', label: 'Eye Consultation Services' },
    { value: 'cataract', label: 'Cataract & Operations' },
    { value: 'vision-therapy', label: 'Vision Therapy' },
    { value: 'spectacles', label: 'Spectacles & Eyecare' },
    { value: 'outreach', label: 'Rural Outreach Camps' }
  ];

  const doctors = [
    { value: 'dr-shuaib', label: 'Dr. Ali Ahmed Shuaib' },
    { value: 'dr-islam', label: 'Dr. Ashraful Islam' },
    { value: 'tufayel', label: 'Syed Tufayel Rahman (Optometrist)' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const sendEmail = async (emailData: any) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return await response.json();
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.clinic || !formData.service || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        type: 'appointment',
        to: 'munadzaman@gmail.com',
        subject: 'New Appointment Booking - Newlife Medical Services',
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          clinic: clinics.find(c => c.value === formData.clinic)?.label || formData.clinic,
          service: services.find(s => s.value === formData.service)?.label || formData.service,
          doctor: doctors.find(d => d.value === formData.doctor)?.label || formData.doctor || 'Not specified',
          date: formData.date,
          time: formData.time || 'Not specified',
          submittedAt: new Date().toLocaleString()
        }
      };

      await sendEmail(emailData);

      toast({
        title: "Appointment Booked!",
        description: `Your appointment has been confirmed. We'll contact you at ${formData.email} and ${formData.phone} with further details.`,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        clinic: '',
        service: '',
        doctor: '',
        date: '',
        time: ''
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error submitting your appointment. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-blue-50" id="booking">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600">
            Schedule your consultation with our expert medical team
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-800">
              <Calendar className="inline-block mr-2 h-6 w-6" />
              Appointment Booking
            </CardTitle>
            <CardDescription>
              Fill in the details below to book your appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+880 1XXX-XXXXXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Select Clinic *
                  </Label>
                  <Select value={formData.clinic} onValueChange={(value) => setFormData({...formData, clinic: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a clinic" />
                    </SelectTrigger>
                    <SelectContent>
                      {clinics.map((clinic) => (
                        <SelectItem key={clinic.value} value={clinic.value}>
                          {clinic.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Select Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Select Doctor/Consultant</Label>
                  <Select value={formData.doctor} onValueChange={(value) => setFormData({...formData, doctor: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a doctor (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.value} value={doctor.value}>
                          {doctor.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Preferred Time
                </Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
              </Button>

              <p className="text-sm text-gray-600 text-center">
                * Required fields. We'll contact you within 24 hours to confirm your appointment and send a confirmation email.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;