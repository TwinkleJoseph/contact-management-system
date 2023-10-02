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

<style scoped>

.contact-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.contact-table th, .contact-table td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}

.contact-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.contact-table td a {
  color: #007BFF;
  text-decoration: none;
}

.contact-table td a:hover {
  text-decoration: underline;
}
</style>
