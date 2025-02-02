import dynamoose from 'dynamoose';

const scheduledSchema = new dynamoose.Schema(
	{
		fired: { type: Boolean, default: false },
		recurring: { type: Boolean, default: false },
		scheduledAt: { type: Date, required: true },
		fireAfter: { type: Number },
		log: { type: String, default: '' },
		deleted: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

const apiSchema = new dynamoose.Schema(
	{
		triggeredTime: { type: Date, required: true },
		requestPayload: { type: String, default: '' },
		log: { type: String, default: '' }
	},
	{ timestamps: true }
);

const segwiseSchema = new dynamoose.Schema(
	{
		name: { type: String, required: true },
		username: { type: String, hashKey: true, required: true },
		password: { type: String, required: true },
		type: { type: String, enum: ['admin', 'user'], default: 'user' },
		scheduled: { type: Array, schema: scheduledSchema },
		api: { type: Array, schema: apiSchema }
	},
	{ timestamps: true }
);

const Segwise = dynamoose.model('segwise', segwiseSchema);

export default Segwise;
