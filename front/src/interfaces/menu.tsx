// Interface principale pour les données du menu
export interface MenuResponse {
    data: MenuData;
    meta: Record<string, unknown>; // Structure des métadonnées si nécessaire
}

// Interface des données du menu
export interface MenuData {
    id: number;
    attributes: MenuAttributes;
}

// Attributs du menu
export interface MenuAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    label: string;
    menu_links: MenuLinks;
}

// Interface pour les liens du menu
export interface MenuLinks {
    data: MenuLink[];
}

// Chaque lien dans le menu
export interface MenuLink {
    id: number;
    attributes: MenuLinkAttributes;
}

// Attributs d'un lien du menu
export interface MenuLinkAttributes {
    createdAt: string;
    updatedAt: string;
    custom_link: string | null;
    external: boolean | null;
    label: string;
    post: PostRelation | null;
    page: PageRelation | null;
}

// Relation vers un post
export interface PostRelation {
    data: PostData | null;
}

// Données d'un post
export interface PostData {
    id: number;
    attributes: PostAttributes;
}

// Attributs d'un post
export interface PostAttributes {
    title: string;
    intro: string;
    meta_title: string;
    meta_description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    main_image: ImageRelation | null;
    categories: RelationArray;
    localizations: RelationArray;
}

// Relation vers une image
export interface ImageRelation {
    data: ImageData | null;
}

// Données d'une image
export interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

// Attributs d'une image
export interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: Record<string, unknown> | null;
    createdAt: string;
    updatedAt: string;
}

// Formats disponibles pour une image
export interface ImageFormats {
    large?: ImageFormatDetails;
    medium?: ImageFormatDetails;
    small?: ImageFormatDetails;
    thumbnail?: ImageFormatDetails;
}

// Détails pour chaque format d'image
export interface ImageFormatDetails {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
}

// Relation vers une page
export interface PageRelation {
    data: PageData | null;
}

// Données d'une page
export interface PageData {
    id: number;
    attributes: PageAttributes;
}

// Attributs d'une page
export interface PageAttributes {
    title: string;
    slug: string;
    homepage: boolean;
    meta_title: string | null;
    meta_desc: string | null;
    og_title: string | null;
    og_desc: string | null;
    og_type: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    secondary_page: boolean | null;
    content_page: any[]; // Type exact à définir si connu
    social_image: ImageRelation | null;
    localizations: RelationArray;
}

// Tableau de relations génériques
export interface RelationArray {
    data: RelationItem[];
}

// Élément générique dans une relation
export interface RelationItem {
    id: number;
    attributes: Record<string, unknown>; // Ajuster selon les besoins
}
