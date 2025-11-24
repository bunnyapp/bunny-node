import * as dotenv from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config()

const config: CodegenConfig = {
  schema: [{'https://bunny.bunny.internal/graphql/': {
    headers: {
      Authorization: `Bearer ${ process.env.BUNNY_ACCESS_TOKEN }`
    }
  }}],
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations'
      ],
      config: {
        avoidOptionals: false,
        maybeValue: 'T | null',
        enumsAsTypes: true
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