import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/character.service'; 

@Component({
  selector: 'app-componente',
  templateUrl: './componente.page.html',
  styleUrls: ['./componente.page.scss'],
})
export class ComponentePage implements OnInit {

  characters: any[] = [];
  newCharacter = { name: '', category: '' };
  previewImage: string | ArrayBuffer | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.characterService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }

  onDelete(index: number): void {
    this.characters.splice(index, 1);
  }

  onAddCharacter(): void {
    if (this.newCharacter.name && this.newCharacter.category && this.previewImage) {
      const newChar = {
        name: this.newCharacter.name,
        species: this.newCharacter.category,
        image: this.previewImage
      };
      this.characters.push(newChar);
      this.newCharacter = { name: '', category: '' };
      this.previewImage = null; // Clear preview image after adding
    } else {
      alert('Por favor, complete todos los campos y seleccione una imagen.');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
