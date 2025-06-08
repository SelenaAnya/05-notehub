export interface Note {
    id: number;
    title: string;
    content: string;
    tag: 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface NotesResponse {
    notes: Note[];
    totalPages: number;
    currentPage: number;
    totalCount: number;
    perPage: number;
  }
  
  export interface CreateNoteRequest {
    title: string;
    content: string;
    tag: 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';
  }