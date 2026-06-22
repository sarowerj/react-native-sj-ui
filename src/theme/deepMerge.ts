import type { DeepPartial } from './types';

function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge<T>(target: T, source?: DeepPartial<T>): T {
  if (!source) {
    return target;
  }

  const output = { ...target } as Record<string, unknown>;

  Object.keys(source).forEach((key) => {
    const sourceValue = source[key as keyof typeof source];
    const targetValue = output[key];

    if (sourceValue === undefined) {
      return;
    }

    if (isObject(targetValue) && isObject(sourceValue)) {
      output[key] = deepMerge(targetValue, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  });

  return output as T;
}
