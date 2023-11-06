import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	openProfileComponent(): void {
		window.open('/profile', '_blank');
	}

	openExperienceComponent(): void {
		window.open('/experience', '_blank');
	}

	downloadResume(): void {
		window.open('../../assets/docs/resume.pdf', '_blank');
	}
}
