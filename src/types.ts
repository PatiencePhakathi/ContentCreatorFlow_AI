export type ContentType = 'LinkedIn post'|'Social media caption'|'Blog post'|'Professional email'|'Cover letter'|'Product description'|'Professional bio'|'Marketing copy';
export type Tone = 'Professional'|'Friendly'|'Casual'|'Persuasive'|'Inspirational'|'Formal'|'Creative';
export type Length = 'Short'|'Medium'|'Long';
export interface ContentForm { type: ContentType; topic:string; audience:string; tone:Tone; style:string; length:Length; language:string; keywords:string; instructions:string; }
export interface ContentItem { id:string; type:ContentType; topic:string; content:string; prompt:string; date:string; saved:boolean; favourite:boolean; }
