<template>
  <div>
    <h2>Contact List</h2>
    <input :value="filter" @input="$emit('update:filter', $event.target.value)" placeholder="Filter by name" />
    <table class="contact-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in filteredContacts" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <td><a :href="contact.website">{{ contact.website }}</a></td>
          <td>{{ contact.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import '../styles/main.css';

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


