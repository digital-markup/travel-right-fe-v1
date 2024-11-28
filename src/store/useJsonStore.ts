import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { createJSONStorage, persist } from "zustand/middleware";

type JsonStore = {
    locations: string[];
    setLocations: (newLocations: string[]) => void,
    clearLocations: () => void,
    getLocation: (key: string) => string[],
    getLatestLocation: () => string,
    key?: string
}

const useJsonStore = create(persist<JsonStore>(
    (set, get) => ({
        locations: [],
        setLocations: (locations) => set({
            locations,
            key: uuidv4()
        }),
        getLocation: (key) => get().locations.filter((location) => location === key),
        getLatestLocation: () => get().locations[get().locations.length - 1],
        clearLocations: () => set({ locations: [] }),
    }), {
    name: "json-storage",
    storage: createJSONStorage(() => sessionStorage)
}
));

export default useJsonStore