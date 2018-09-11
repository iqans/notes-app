import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotesService } from '../services/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Note } from '../note';

@Component({
  selector: 'app-note-share-view',
  templateUrl: './note-share-view.component.html',
  styleUrls: ['./note-share-view.component.css']
})
export class NoteShareViewComponent implements OnInit {
  note: Note;
  errMessage: string;
  collaborator: string;
  accessType: string;
  acTypes: Array<string> = [ 'viewer', 'editor' ];

  constructor(
    private dialogRef: MatDialogRef<NoteShareViewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private noteService: NotesService) { }

  ngOnInit() {
    this.note = this.noteService.getNoteById(this.data.noteId);
  }

  onSave() {
    this.noteService.shareNotes(this.collaborator, this.accessType, [ this.note ]).subscribe(
      data => this.dialogRef.close(),
      error => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error: HttpErrorResponse): void {
    if (error.status === 404) {
      this.errMessage = error.message;
    } else {
      this.errMessage = 'An error occurred:' + error.error.message;
    }
  }
}