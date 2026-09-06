export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Plan {
  id: string;
  name: string;
  frequency: string;
  description: string;
  features: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {

  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
