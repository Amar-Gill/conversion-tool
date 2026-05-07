<script setup lang="ts">
const state = reactive<{
  quantity: number
  fromUnit?: LengthUnits
  toUnit?: LengthUnits
}>({
  quantity: 0,
  fromUnit: undefined,
  toUnit: undefined
})

const convertedValue = computed<number | undefined>(() => {
  if (!state.fromUnit || !state.toUnit) {
    return
  }

  return convertLength(state.quantity, state.fromUnit, state.toUnit)
})
</script>

<template>
  <div>
    <UContainer>
      <UForm>
        <UFormField
          label="Quantity"
          name="quantity"
        >
          <UInputNumber v-model="state.quantity" />
        </UFormField>
      </UForm>

      <UForm>
        <UFormField
          label="Convert from unit"
          name="from-unit"
        >
          <UInputMenu
            v-model="state.fromUnit"
            :items="lengthUnits"
            placeholder="Select unit..."
          />
        </UFormField>
      </UForm>

      <UForm>
        <UFormField
          label="Convert to unit"
          name="to-unit"
        >
          <UInputMenu
            v-model="state.toUnit"
            :items="lengthUnits"
            placeholder="Select unit..."
          />
        </UFormField>
      </UForm>
      <div v-if="convertedValue !== undefined">
        Converted Value:
        {{ convertedValue }}
      </div>
    </UContainer>
  </div>
</template>
