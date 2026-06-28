import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {globalSettingsType} from './documents/globalSettingsType'
import {pageType} from './documents/pageType'
import {sectionType} from './documents/sectionType'
import {universityType} from './documents/universityType'
import {sectionReferenceType} from './objects/sectionReferenceType'
import {seoType} from './objects/seoType'
import {socialLinkType} from './objects/socialLinkType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    globalSettingsType,
    pageType,
    sectionType,
    universityType,
    seoType,
    socialLinkType,
    sectionReferenceType,
  ],
}
