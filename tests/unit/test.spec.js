import { mount } from "@vue/test-utils";
import PecahanForm from "@/components/PecahanForm.vue";
import pecahin from "@/tool/pecahin.js";

describe("PecahanForm.vue", () => {
  it("Component PecahanForm berhasil di render\n", () => {
    const wrapper = mount(PecahanForm);
    expect(wrapper.contains("div")).toBe(true);
  });
});

describe("Return value dalam bentuk Array of Object berisi dari pecahan & jumlahnya", () => {
  const pecahan = pecahin("50070");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toEqual(
      expect.arrayContaining([
        {
          pecahan: expect.any(Number),
          jumlah: expect.any(Number)
        }
      ])
    );
  });
});
describe('Test value "15000"', () => {
  const pecahan = pecahin("15000");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toEqual(
      expect.arrayContaining([
        {
          pecahan: expect.any(Number),
          jumlah: expect.any(Number)
        }
      ])
    );
  });
});
describe('Test value "Rp3900"', () => {
  const pecahan = pecahin("Rp3900");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toEqual(
      expect.arrayContaining([
        {
          pecahan: expect.any(Number),
          jumlah: expect.any(Number)
        }
      ])
    );
  });
});
describe('Test value "12510"', () => {
  const pecahan = pecahin("12510");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toEqual(
      expect.arrayContaining([
        {
          pecahan: expect.any(Number),
          jumlah: expect.any(Number)
        }
      ])
    );
  });
});
describe("Memiliki sisa ketika terdapat pecahan uang yang tidak disediakan", () => {
  const pecahan = pecahin("50070");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ sisa: expect.any(Number) })
      ])
    );
  });
});
describe("Error ketika inputan tidak sesuai pattern: 50000a0", () => {
  const pecahan = pecahin("50000a0");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toHaveProperty("err");
  });
});
describe("Error ketika inputan memiliki titik ribuan yang salah posisi: 5000.00", () => {
  const pecahan = pecahin("5000.00");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toHaveProperty("err");
  });
});
describe("Error ketika inputan memiliki invalid separator: 500,000", () => {
  const pecahan = pecahin("500,000");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toHaveProperty("err");
  });
});
describe("Error ketika nilai inputan tidak ada", () => {
  const pecahan = pecahin();
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toHaveProperty("err");
  });
});
describe('Error ketika Kode Rupiah ("Rp" / "Rp ") tidak berada di awal', () => {
  const pecahan = pecahin("50000Rp");
  it(JSON.stringify(pecahan) + "\n", () => {
    expect(pecahan).toHaveProperty("err");
  });
});
