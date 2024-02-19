import {animate, style, transition, trigger} from "@angular/animations";

export const elasticInOut = trigger('elasticInOut', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.7)' }),
        animate(
            '0.5s cubic-bezier(0.6, -0.3, 0.27, 1.25)',
            style({ opacity: 1, transform: 'scale(1)' })
        ),
    ]),
    transition(':leave', [
        animate(
            '0.5s cubic-bezier(0.6, -0.3, 0.27, 1.25)',
            style({ opacity: 0, transform: 'scale(0.7)' })
        ),
    ]),
]);
