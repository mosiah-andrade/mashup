import type { ChatMessage, MockMatch, MockStoreState } from "./types";
import { initialMessages } from "./mock-data";

const STORAGE_KEY = "matchup-mock-store-v1";

function cloneInitialState(): MockStoreState {
  return {
    favorites: [],
    passed: [],
    matches: [],
    messages: Object.fromEntries(
      Object.entries(initialMessages).map(([id, messages]) => [id, messages.map((message) => ({ ...message }))]),
    ),
  };
}

export function loadMockState(): MockStoreState {
  if (typeof window === "undefined") return cloneInitialState();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return cloneInitialState();
    const parsed = JSON.parse(raw) as Partial<MockStoreState>;
    return {
      favorites: parsed.favorites ?? [],
      passed: parsed.passed ?? [],
      matches: parsed.matches ?? [],
      messages: parsed.messages ?? cloneInitialState().messages,
    };
  } catch {
    return cloneInitialState();
  }
}

export function saveMockState(state: MockStoreState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function toggleFavorite(profileId: string) {
  const state = loadMockState();
  const favorites = state.favorites.includes(profileId)
    ? state.favorites.filter((id) => id !== profileId)
    : [...state.favorites, profileId];

  saveMockState({ ...state, favorites });
  return favorites.includes(profileId);
}

export function markAsPassed(profileId: string) {
  const state = loadMockState();
  if (state.passed.includes(profileId)) return;
  saveMockState({ ...state, passed: [...state.passed, profileId] });
}

export function resetPassed(profileIds?: string[]) {
  const state = loadMockState();
  const passed = profileIds ? state.passed.filter((id) => !profileIds.includes(id)) : [];
  saveMockState({ ...state, passed });
}

export function createMockMatch(profileId: string): MockMatch {
  const state = loadMockState();
  const existing = state.matches.find((match) => match.profileId === profileId);
  if (existing) return existing;

  const match: MockMatch = {
    id: "match-" + profileId,
    profileId,
    createdAt: new Date().toISOString(),
  };

  saveMockState({ ...state, matches: [...state.matches, match] });
  return match;
}

export function appendMockMessage(profileId: string, message: ChatMessage) {
  const state = loadMockState();
  const current = state.messages[profileId] ?? [];
  saveMockState({ ...state, messages: { ...state.messages, [profileId]: [...current, message] } });
}

export function getMockMessages(profileId: string) {
  return loadMockState().messages[profileId] ?? [];
}

export function getMockMatches() {
  return loadMockState().matches;
}

export function getMockFavorites() {
  return loadMockState().favorites;
}
