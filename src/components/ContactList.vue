<template>
  <div>
    <h2>Contact List</h2>
    <input :value="filter" @input="$emit('update:filter', $event.target.value)" placeholder="Filter by name" />
    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <strong>{{ contact.name }}</strong> - {{ contact.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['contacts', 'filter'],
  computed: {
    filteredContacts() {
      if (!this.filter) return this.contacts;
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
};
</script>
