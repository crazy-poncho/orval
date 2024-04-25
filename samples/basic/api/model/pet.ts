/**
 * Generated by orval v6.28.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */

export interface Pet {
  /**
   * @minimum 0
   * @maximum 30
   * @exclusiveMinimum
   * @exclusiveMaximum
   */
  age?: number;
  id: number;
  /**
   * Name of pet
   * @minLength 40
   * @maxLength 0
   */
  name: string;
  /**
   * @nullable
   * @pattern ^\\d{3}-\\d{2}-\\d{4}$
   */
  tag?: string | null;
}
