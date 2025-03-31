import * as dotenv from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config()

const config: CodegenConfig = {
  schema: [{'https://rich.bunny.com/graphql/': {
    headers: {
      Authorization: `Bearer ${ process.env.BUNNY_ACCESS_TOKEN }`
    }
  }}],
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/generated/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}

export default config