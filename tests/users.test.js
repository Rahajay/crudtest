import request from "supertest";
import app from "../index.js";
import db from "../config/database.js";

describe("User API", () => {
  let userId; //variabel ini digunakan di seluruh tes

  it("Buat User", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({
        name: "RahaJay",
        email: "RahaJay@example.com",
        age: 30,
      });

    console.log("Response Body:", res.body); // Debugging respons API
    expect(res.body).toHaveProperty("id");
    userId = res.body.id; // Simpan id untuk digunakan pada tes lainnya
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("Tampil User", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("Mendapatkan ID", async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(userId); // Cek apakah ID yang diterima sesuai
  });

  it("Update User", async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({
        name: "Isagi Yoichi",
        email: "egoista@gmail.com",
        age: 23,
      });
  
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Isagi Yoichi");
    expect(res.body.email).toBe("egoista@gmail.com");
    expect(res.body.age).toBe(23);
  });
  
  it("Delete User", async () => {
    // Menghapus user
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body.msg).toBe("Data berhasil dihapus");
  });
  

  // menutup koneksi Sequelize setelah test selesai
  afterAll(async () => {
    await db.close(); // Gunakan db.close() untuk menutup koneksi
  });
});
