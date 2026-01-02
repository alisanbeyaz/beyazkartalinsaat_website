import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Beyaz Kartal Panel',

  // Updated projectId for new Sanity account
  projectId: 'pan5xdly',
  dataset: 'production',
  basePath: '/admin',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
