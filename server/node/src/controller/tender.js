const Tender = require("../model/tender");

exports.getAllTenders = async (req, res) => {
  try {
    const tenders = await Tender.find();
    res.status(200).json(tenders);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getTenderById = async (req, res) => {
  try {
    const tender = await Tender.findById(req.params.id);
    if (!tender) {
      return res.status(404).json({ error: "Tender not found." });
    }
    res.status(200).json(tender);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.createBid = async (req, res) => {
  try {
    const { tenderId, bidAmount, bidderId } = req.body;
    const tender = await Tender.findById(tenderId);
    if (!tender) {
      return res.status(404).json({ error: "Tender not found." });
    }
    tender.bids.push({ amount: bidAmount, bidderId: bidderId });
    tender.statistics.bidsCount++;
    tender.statistics.averageBid =
      (tender.statistics.averageBid * (tender.statistics.bidsCount - 1) +
        bidAmount) /
      tender.statistics.bidsCount;
    await tender.save();
    res.status(200).json({ message: "Bid created successfully." });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};
