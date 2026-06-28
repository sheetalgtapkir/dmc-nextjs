import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Global Settings')
        .schemaType('globalSettings')
        .child(
          S.document()
            .schemaType('globalSettings')
            .documentId('globalSettings')
            .title('Global Settings'),
        ),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('section').title('Sections'),
      S.documentTypeListItem('university').title('Universities'),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ]),
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['globalSettings', 'page', 'section', 'university', 'post', 'category', 'author'].includes(
            item.getId()!,
          ),
      ),
    ])
