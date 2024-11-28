import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type JsonStore = { locations: any[], addLocation: (location: any) => void, getLocation: (key: string) => any };

const useJsonStore = create(persist<JsonStore>((set, get) => ({
    locations: [],
    addLocation: (location: any) => { set((state: any) => ({ locations: [...state.locations, { key: location.key, location: [location.location] }] })) },
    getLocation: (key: string) => { return get().locations.find((location: any) => location.key === key) },
}), {
    name: "locations-store",
    storage: createJSONStorage(() => sessionStorage),
}));

export default useJsonStore