import { create } from "zustand";

const useSuggestionState = create((set) => ({
  message: ["Select the options to generate a trip plan."],
  sightseeingLocations: [],
  isLoading: false,
  isPhotoLoading: true,
  startLoading: () =>
    set((state) => ({
      ...state,
      message: [],
      sightseeingLocations: [],
      isLoading: true,
    })),
  suggestionRecv: (message, sightseeingLocations) =>
    set((state) => ({
      ...state,
      message,
      sightseeingLocations,
      isLoading: false,
      isPhotoLoading: false,
    })),
  suggestionErr: () =>
    set((state) => ({
      ...state,
      message: [],
      sightseeingLocations: [],
      isLoading: false,
    })),
}));

export default useSuggestionState;
