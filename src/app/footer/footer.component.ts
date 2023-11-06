import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	openGithubProfile(): void {
		window.open('https://www.google.com', '_blank');
	}
}
