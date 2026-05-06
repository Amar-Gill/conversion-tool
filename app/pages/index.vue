<template>
  <div>
    <UContainer>
      <UForm>
        <UFormField
          label="Quantity"
          name="quantity"
        >
          <UInputNumber />
        </UFormField>
      </UForm>

      <UForm>
        <UFormField
          label="From Unit"
          name="from-unit"
        >
          <UInputMenu />
        </UFormField>
      </UForm>

      <UForm>
        <UFormField
          label="To Unit"
          name="to-unit"
        >
          <UInputMenu />
        </UFormField>
      </UForm>
    </UContainer>
  </div>
</template>
