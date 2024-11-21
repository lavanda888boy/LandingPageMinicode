import { create } from "zustand";

export interface Offer {
  id: number;
  content: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
}

export interface Insurance {
  id: number;
  title: string;
}

interface OfferState {
  offers: Offer[];
  fetchOffers: () => Promise<void>;
}

interface ReviewState {
  reviews: Review[];
  fetchReviews: () => Promise<void>;
}

interface InsuranceState {
  insurances: Insurance[];
  fetchInsurances: () => Promise<void>;
}

export const useOfferStore = create<OfferState>((set) => ({
  offers: [],
  fetchOffers: async () => {
    const response = await fetch("http://localhost:3000/offers");
    const offers = await response.json();
    set({ offers });
  },
}));

export const useReviewStore = create<ReviewState>((set) => ({
  reviews: [],
  fetchReviews: async () => {
    const response = await fetch("http://localhost:3000/reviews");
    const reviews = await response.json();
    set({ reviews });
  },
}));

export const useInsuranceStore = create<InsuranceState>((set) => ({
  insurances: [],
  fetchInsurances: async () => {
    const response = await fetch("http://localhost:3000/insurances");
    const insurances = await response.json();
    set({ insurances });
  },
}));
